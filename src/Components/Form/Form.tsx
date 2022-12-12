import { useForm } from "react-hook-form";
import "./Form.css";
import { UserInterface } from '../../models/UserModel'
import { apiService } from "../../ApiService/ApiService";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";

function Form(): JSX.Element {
    const { register, handleSubmit, formState: { errors, isValid, isSubmitted } } = useForm<UserInterface>();

    async function postUsers(user: UserInterface) {
        // console.log(user)
        if (isValid && isSubmitted) {

            toastMess()
            await apiService.postUser(user);
        }
    }


    function toastMess() {
        toast.success('נרשמת בהצלחה!', {
            position: toast.POSITION.TOP_CENTER,
            className: 'discoverToast',
            theme: "colored",
            // hideProgressBar:true,
            closeOnClick: true,
            draggable: true,
            pauseOnHover: false,
        })
    }

    return (
        <div className="Form">
            <form onSubmit={handleSubmit(postUsers)} className="form">
                <label className="label">
                    שם מלא:
                    <input className="input" type="text" {...register("fullname", { required: true })} />
                    {errors.fullname && <p>Please enter a full name.</p>}

                </label>
                <br />
                <label className="label">
                    אימייל:
                    <input className="input" type="email" {...register("email", {
                        required: true,
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: 'Please enter a valid Email'
                        }
                    })} />
                    {errors.email && <p>Please enter a valid email address.</p>}
                </label>
                <br />
                <label className="label">
                    טלפון:
                    <input className="input" type="tel" {...register("phone", {
                        required: true,
                        pattern: {
                            value: /^0\d([\d]{0,1})([-]{0,1})\d{7}$/,
                            message: "בבקשה תוסיף מספר פלאפון ואלידי"
                        }
                    })} />
                    {errors.phone && <p>Please enter a valid Phone number.</p>}
                </label>
                <br />
                <input className="submit" type="submit" value="Submit" />
            </form>
            <Footer />
        </div>
    );
}

export default Form;
