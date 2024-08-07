import { Form, Formik } from "formik";

import CommonButton from "../../common/CommonButton";
import FormField from "../../common/FormField";
import Loader from "../../common/Loader";
import Navbar from "../../common/Navbar";
import CreateCustomerContainer from "../../container/customer/createCustomer.container";
import { customerFormField } from "../../description/customer.description";
import { customerSchema } from "../../utils/validationSchema/peoplesSchema";

const CreateCustomer = () => {
  const { handleBack, initialValues, handleSubmit, isEdit, status } =
    CreateCustomerContainer();

  if (status !== "succeeded" && isEdit) return <Loader />;

  return (
    <div>
      <Navbar
        title="Create Customer"
        showBackBtn
        handleBackBtn={() => handleBack()}
      />

      <Formik
        initialValues={initialValues}
        validationSchema={customerSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ errors, touched, values, isSubmitting }) => (
          <Form>
            <div className="row">
              {customerFormField?.map((field, index) => (
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
