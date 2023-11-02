import './user-registration.component.css';
import { useRef } from 'react';


export function UserRegistration() {

    const nameRef = useRef();
    const emailRef = useRef();
    const dobRef = useRef();
    const phoneRef = useRef();
    const genderRef = useRef();

    return (
        <div className="margin-20">
            <form>
                {/* User Name */}
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" ref={ nameRef }></input>
                </div>
                {/* Email */}
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" ref={ emailRef }></input>
                </div>
                {/* User Name */}
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="number" className="form-control" ref={ phoneRef }></input>
                </div>
                {/* User Name */}
                <div className="form-group">
                    <label>DOB</label>
                    <input type="date" className="form-control" ref={ dobRef }></input>
                </div>
                {/* User Name */}
                <div className="form-group m-t-5">
                    <label>Gender</label>
                    <input type="radio" value="Male" name="gender" class="form-check-input"></input>Male
                    <input type="radio" value="Female" name="gender" class="form-check-input"></input>Female
                </div>
                <div className='form-group m-t-5'>
                    <input type='checkbox' className='form-check-input'></input>
                    <label>Agree with terms & conditions.</label>
                </div>
                <div className=' m-t-5'>
                    <input type="submit" value="Save" className="btn btn-primary"></input>
                    <input type="reset" value="Cancel" className="btn btn-secondary margin-left-10"></input>
                </div>                
            </form>
        </div>
    )
}