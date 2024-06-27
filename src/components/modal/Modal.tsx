import "./modal.css";
import { IoMdClose } from "react-icons/io";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

type modalProps = {
    active: true | false;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialValues = {
    tel: "",
};

const validationSchema = Yup.object().shape({
    tel: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required"),
});

const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^\d]/g, "");
};

const Modal: React.FC<modalProps> = ({ active, setActive }) => {
    return (
        <div
            className={active ? "modal__overlay active" : "modal__overlay"}
            onClick={(e) => setActive(false)}
        >
            <div
                className={active ? "modal active" : "modal"}
                onClick={(e) => e.stopPropagation()}
            >
                <IoMdClose
                    className="icon-close"
                    onClick={() => setActive(false)}
                />
                <h2 className="modal__title">Callback order</h2>
                <p className="modal__text">
                    Enter the phone number to which you need to call back
                </p>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => console.log(values)}
                >
                    {({ errors }) => (
                        <Form>
                            <Field
                                className="modal__input"
                                type="tel"
                                name="tel"
                                placeholder="Phone number"
                                onInput={handleInput}
                            />
                            {errors.tel && <div>{errors.tel}</div>}
                            <br />
                            <button type="submit" className="modal__btn">
                                Call me back
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Modal;
