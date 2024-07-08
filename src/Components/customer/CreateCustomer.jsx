import { Form, Formik } from "formik";
import React from "react";
import FormField from "../../common/FormField";
import Navbar from "../../common/Navbar";
import CreateCustomerContainer from "../../container/customer/createCustomer.container";
import { supplierFormField } from "../../description/suppliers.description";
import { supplierSchema } from "../../utils/validationSchema/PeoplesSchema";
import CommonButton from "../../common/CommonButton";

const CreateCustomer = () => {
  const { handleBack, initialValues, handleSubmit } = CreateCustomerContainer();

  return (
    <div>
      <Navbar
        title="Create Supplier"
        showExportBtn={false}
        showNewAddBtn={false}
        showBackBtn={true}
        handleBackBtn={() => handleBack()}
      />

      <Formik
        initialValues={initialValues}
        validationSchema={supplierSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, isSubmitting }) => (
          <Form>
            <div className="row">
              {supplierFormField?.map((field, index) => (
                <FormField
                  key={index}
                  field={field}
                  values={values}
                  errors={errors}
                  touched={touched}
                />
              ))}
            </div>
            <div className="my-5">
              <CommonButton
                isSubmitting={isSubmitting}
                text="Create Customer"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateCustomer;