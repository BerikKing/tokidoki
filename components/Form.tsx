import {Formik, Field, Form as Forms, } from "formik"

const Form =() => {
    return (
        <>
            <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            // validationSchema={loginShema}
            onSubmit={(value) => {
                
            }}
            >
                {() => {
                    return (
                        <Forms className="form">
                            <div className="email">

                            </div>
                            <div className="password">

                            </div>

                        </Forms>
                    )
                }}

            </Formik>
        </>
    )
}
export default Form