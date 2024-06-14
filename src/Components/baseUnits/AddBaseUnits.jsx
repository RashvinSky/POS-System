import { Form, Formik } from "formik";
import React from "react";
import { plusIcon } from "../../assets/icons/tables";
import FormField from "../../common/FormField";
import OffcanvasDrawer from "../../common/OffcanvasDrawer";
import { baseUnitsFields } from "../../description/baseUnits.description";

const AddBaseUnits = ({ isDrawerOpen, setDrawerOpen }) => {
  return (
    <OffcanvasDrawer
      isDrawerOpen={isDrawerOpen}
      setDrawerOpen={setDrawerOpen}
      title="Add Base-Units"
    >
      <div>
        <Formik
          initialValues={{ name: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) errors.name = `Required`;
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {baseUnitsFields?.map((field, index) => (
                <FormField
                  key={index}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              ))}
              <div className="add-table-create-btn mt-4">
                <button disabled={isSubmitting}>
                  {plusIcon("white")}
                  <span className="ms-2">Save</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </OffcanvasDrawer>
  );
};

export default AddBaseUnits;
