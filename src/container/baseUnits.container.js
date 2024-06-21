import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBaseUnit } from "../api/services/baseUnitsService";
import { deleteIcon, editIcon } from "../assets/icons/tables";
import {
  fetchBaseUnitById,
  fetchBaseUnits,
  resetInitialValues,
  setEdit,
  setModalOpen,
} from "../redux/slice/baseUnitSlice";

const BaseUnitsContainer = () => {
  const dispatch = useDispatch();
  const { baseUnitsData, isModalOpen } = useSelector(
    (state) => state?.baseUnit
  );

  const handleAdd = () => {
    dispatch(resetInitialValues({ name: "" }));
    dispatch(setEdit(false));
    dispatch(setModalOpen(true));
  };

  const handleEdit = (row) => {
    dispatch(setEdit(true));
    dispatch(fetchBaseUnitById(row?._id));
    dispatch(setModalOpen(true));
  };

  const handleDelete = (row) => {
    deleteBaseUnit(row?._id);
    dispatch(fetchBaseUnits());
  };

  const actionsBtn = [
    { name: "edit", icon: editIcon, handler: handleEdit },
    { name: "delete", icon: deleteIcon, handler: handleDelete },
  ];

  useEffect(() => {
    dispatch(fetchBaseUnits());
  }, [dispatch]);

  return {
    handleAdd,
    actionsBtn,
    baseUnitsData,
    isModalOpen,
  };
};

export default BaseUnitsContainer;
