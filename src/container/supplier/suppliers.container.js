import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteSupplier } from "../../api/services/supplierService";
import { deleteIcon, editIcon } from "../../assets/icons/tables";
import {
  fetchSuppliers,
  resetInitialValues,
  setEdit,
} from "../../redux/slice/supplierSlice";

const SuppliersContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { suppliersData = [], status } = useSelector(
    (state) => state?.supplier || {}
  );

  const handleAdd = () => {
    dispatch(resetInitialValues());
    dispatch(setEdit(false));
    navigate("/suppliers/create");
  };

  const handleEdit = (row) => {
    dispatch(setEdit(true));
    navigate(`/suppliers/edit/${row?._id}`);
  };

  const handleDelete = async (row) => {
    await deleteSupplier(row?._id);
    dispatch(fetchSuppliers());
  };

  const actionsBtn = [
    { name: "edit", icon: editIcon, handler: handleEdit },
    { name: "delete", icon: deleteIcon, handler: handleDelete },
  ];

  useEffect(() => {
    dispatch(fetchSuppliers());
  }, [dispatch]);

  return { handleAdd, actionsBtn, suppliersData, status };
};

export default SuppliersContainer;
