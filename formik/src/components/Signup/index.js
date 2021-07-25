import React from 'react'
import { useFormik } from 'formik';
import validationSchema from '../validations';


function Signup() {

    const {handleChange, handleBlur, handleSubmit, values, errors, touched} = useFormik({
        initialValues: {
          email: '',
          password: '',
          confirmPassword: '',
          // gender: '',
          // programming: [],
          // country: "", 
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
        validationSchema,
      });


    return (
        <div>
            <h1>Formik Form</h1>
         <form onSubmit={handleSubmit}>
         <label htmlFor="email">Email</label>
           <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
           {errors.email && touched.email && <div className="err">{errors.email}</div>}
           <br /><br />
           <label htmlFor="password">Password</label>
           <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
           {errors.password && touched.password && <div className="err">{errors.password}</div>}
           <br /><br />
           <label htmlFor="confirm">Confirm password</label>
           <input type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
           {errors.confirmPassword && touched.confirmPassword && <div className="err">{errors.confirmPassword}</div>}
           {/* <span>Male</span>
           <input type="radio" name="gender" placeholder="male" value="male" onChange={handleChange} />
           <span>Female</span>
           <input type="radio" name="gender" placeholder="female" value="female" onChange={handleChange} />
           <br/><br/>
           <div>
             JavaScript
             <input type="checkbox" name="programming" value="javascript" onChange={handleChange} />
           </div>
           <div>
             Golang
             <input type="checkbox" name="programming" value="golang" onChange={handleChange} />
           </div> 
           <div> 
             Python 
             <input type="checkbox" name="programming" value="python" onChange={handleChange} />
           </div>
           <br/><br/>
           <select name="country" onChange={handleChange} value={values.country}>
              <option value="kz">Kazakhstan</option>
              <option value="tr">Turkey</option>
              <option value="ru">Russia</option>
           </select> */}

           <button type="submit">
             Submit
           </button>

           <br/><br/>
           <code>
             {JSON.stringify(values)}
           </code>
         </form>
        </div>
    )
}

export default Signup
