import DynamicTable from "../common/DynamicTable";
import Loader from "../common/Loader";
import Navbar from "../common/Navbar";
import AddVariations from "../components/variations/AddVariations";
import VariationsContainer from "../container/variations/variations.container";
import { variationColumns } from "../description/variations.description";

const Variations = () => {
  const { actionsBtn, variationData, handleAdd, isModalOpen, status } =
    VariationsContainer();

  if (status !== "succeeded") return <Loader />;

  return (
    <div className="variations-section">
      <Navbar
        title="Variations"
        showNewAddBtn
        newAddBtnText="Add Variations"
        openCanvas={handleAdd}
      />

      <div className="product-category-table">
        <DynamicTable
          columns={variationColumns}
          data={variationData}
          actions={actionsBtn}
        />
      </div>

      <AddVariations isModalOpen={isModalOpen} />
    </div>
  );
};

export default Variations;
