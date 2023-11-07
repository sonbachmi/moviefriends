'use client'

// import {useFormState} from 'react-dom';
import {useFormState} from 'react-dom'

import {registerSubmit} from "@/app/actions"
import './page.scss'

const initialState = {
    error: null,
    message: null
}

export default function RegisterPage() {

    // const [passwordsMatch, setPasswordsMatch] = useState(true)
    const [state, formAction] = useFormState(registerSubmit, initialState)

    /*
        function onSubmit(event: FormEvent<HTMLFormElement>) {
            'use client'
            event.preventDefault()
            const form: any = event.target
            const password = form.elements.password.value
            const confirm_password = form.elements.confirm_password.value
            // setPasswordsMatch(!confirm_password || password === confirm_password)
        }
    */
    return (
        <div className="register">
            <form className="uk-form-stacked" action={formAction}>
                <div className="uk-margin uk-alert-primary notes" uk-alert="true">
                    <p>For convenience, you can <a href="/api/auth/signin">log in</a> with username <code>user</code> and
                        password <code>user</code> without having to register here.</p>
                </div>
                <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="username">Username</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" name="username" id="username" type="text" required={true}
                               placeholder="Enter username"/>
                    </div>
                </div>
                <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="password">Password</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" name="password" id="password" type="password" required={true}
                               placeholder="Enter password"/>
                    </div>
                </div>
                {/*                <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="confirm_password">Confirm password</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" name="confirm_password" id="confirm_password" type="password"
                               placeholder="Re-enter password"/>
                    </div>
                </div>*/}
                {state?.error &&
                    <div className="uk-margin uk-alert-danger error message" role="alert" uk-alert="true">
                        {state.message}
                    </div>
                }
                {!state?.id &&
                    <div className="uk-margin actions">
                        <button type="submit" className="button uk-button uk-button-primary">Register</button>
                    </div>}
                {state?.id &&
                    <div className="uk-margin uk-alert-primary success message" aria-live="polite" uk-alert="true">
                        Registration successful. <a href="/api/auth/signin">Login</a> now.
                    </div>
                }
            </form>
        </div>
    )
}
