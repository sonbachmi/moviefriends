import {FormEvent} from "react";
// import {useFormState} from 'react-dom';

import './page.scss'
/*
const iniitialState = {
    passwordsMatch: true
}*/

export default function RegisterPage() {

    // const [passwordsMatch, setPasswordsMatch] = useState(true)
    // const [state, formAction] = useFormState(submit, iniitialState)

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

    async function submit(formData: FormData) {
        'use server'

        const username = formData.get('username')
        const password = formData.get('password')
        // const confirm_password = formData.get('confirm_password')
        // prevState.passwordsMatch = password === confirm_password
        // Ideally persist new user to database
        // But for now just log it
        console.log('User created', username, password)
    }

    function ErrorMessage({message}: { message: string }) {
        'use client'
        return <div className="uk-margin uk-alert-primary notes" uk-alert="true">
            <p>{message}</p>
        </div>
    }

    return (
        <div className="register">
            <form className="uk-form-stacked" action={submit}>
                <div className="uk-margin uk-alert-primary notes" uk-alert="true">
                    <p>Since persistence layer has not been set up yet, this sample form does not store a new user to
                        backend.</p>
                    <p>Instead, <a href="/api/auth/signin">log in</a> with username <code>user</code> and
                        password <code>user</code></p>
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
                <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="confirm_password">Confirm password</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" name="confirm_password" id="confirm_password" type="password"
                               placeholder="Re-enter password"/>
                    </div>
                </div>
{/*                {passwordsMatch ||
                    <ErrorMessage message="Passwords must match"/>
                }*/}
                <div className="uk-margin actions">
                    <button type="submit" className="button uk-button uk-button-primary">Register</button>
                </div>
            </form>
        </div>
    )
}
