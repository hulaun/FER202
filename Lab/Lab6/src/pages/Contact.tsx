import { useDispatch, useSelector } from "react-redux";
import { ContactItem, contactActions } from "../rootReducer/slices/contactSlice";
import { selectCurrentContact } from "../rootReducer/selectors/contactSelectors";
import { useState } from "react";

type ValidationField = 'firstName' | 'lastName' | 'username' | 'city' | 'state' | 'zip';




function Contact() {
    const dispatch = useDispatch()
    const currentContact = useSelector(selectCurrentContact)
    const [validation, setValidation] = useState({
        firstName: {
            state: 'idle',
            validText: "Looks good",
            errorText: "Please provide a valid first name",
        },
        lastName: {
            state: 'idle',
            validText: "Looks good",
            errorText: "Please provide a valid last name"
        },
        username: {
            state: 'idle',
            validText: "Looks good",
            errorText: "Please provide a valid username"
        },
        city: {
            state: 'idle',
            validText: "Looks good",
            errorText: "Please provide a valid city"
        },
        state: {
            state: 'idle',
            validText: "Looks good",
            errorText: "Please provide a valid state"
        },
        zip: {
            state: 'idle',
            validText: "Looks good",
            errorText: "Please provide a valid zip"
        },
        terms: false,
    })

    const setTerms = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValidation(prevState => ({
            ...prevState,
            terms: e.target.checked
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValidation(prevState => ({
            ...prevState,
            [name as ValidationField]: {
                ...prevState[name as ValidationField],
                state: 'idle'
            }
        }));
        dispatch(contactActions.updateCurrentContact({ key: name as keyof ContactItem, value: value }))
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let valid = true;
        Object.keys(validation).forEach((key) => {
            if (validation[key as keyof ContactItem].state === 'idle') {
                validateField(key as keyof ContactItem, currentContact[key as keyof ContactItem] as string);
            }
            if (validation[key as keyof ContactItem].state === 'invalid') {
                valid = false;
            }
        });
        if(!valid || !validation.terms) return;
        dispatch(contactActions.addContact(currentContact))
    }

    const handleFieldStatus = (name: ValidationField) => {
        switch (validation[name].state) {
            case 'idle':
                return '';
            case 'valid':
                return validation[name].validText;
            case 'invalid':
                return validation[name].errorText;
            default:
                return '';
        }
    }

    const handleFieldColor = (name: ValidationField) => {
        switch (validation[name].state) {
            case 'idle':
                return '';
            case 'valid':
                return 'border-green-500';
            case 'invalid':
                return 'border-red-500';
            default:
                return '';
        }
    }

    const validateField = (name: ValidationField, value: string) => {
        const isValid = value.trim() !== ''; // Simple validation: check if the field is not empty
        setValidation(prevState => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                state: isValid ? 'valid' : 'invalid'
            }
        }));
    };
    return (
    <div>
        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-4">
            <section className="flex flex-col col-start-1 col-span-4">
                <label htmlFor="firstName">First name</label>
                <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    placeholder="First name" 
                    className={`border border-black rounded-sm pl-2 ${handleFieldColor("firstName")}`} 
                    value={currentContact.firstName} 
                    onChange={handleChange} />
                <div className={`${handleFieldColor("firstName")}`}>{handleFieldStatus("firstName")}</div>
            </section>
            <section className="flex flex-col col-start-5 col-span-4">
                <label htmlFor="lastName">Last name</label>
                <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    placeholder="Last name" 
                    className={`border border-black rounded-sm pl-2 ${handleFieldColor("lastName")}`} 
                    value={currentContact.lastName} 
                    onChange={handleChange} />
                <div className={`${handleFieldColor("lastName")}`}>{handleFieldStatus("lastName")}</div>
            </section>
            <section className="flex flex-col col-start-9 col-span-4">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    placeholder="Username" 
                    className={`border border-black rounded-sm pl-2 ${handleFieldColor("username")}`} 
                    value={currentContact.username} 
                    onChange={handleChange} />
                <div className={`${handleFieldColor("username")}`}>{handleFieldStatus("username")}</div>
            </section>
            <section className="flex flex-col col-start-1 col-span-6">
                <label htmlFor="city">City</label>
                <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    placeholder="City" 
                    className={`border border-black rounded-sm pl-2 ${handleFieldColor("city")}`} 
                    value={currentContact.city} 
                    onChange={handleChange} />
                <div className={`${handleFieldColor("city")}`}>{handleFieldStatus("city")}</div>
            </section>
            <section className="flex flex-col col-start-7 col-span-3">
                <label htmlFor="state">State</label>
                <input 
                    type="text" 
                    id="state" 
                    name="state" 
                    placeholder="State" 
                    className={`border border-black rounded-sm pl-2 ${handleFieldColor("state")}`} 
                    value={currentContact.state} 
                    onChange={handleChange} />
                <div className={`${handleFieldColor("state")}`}>{handleFieldStatus("state")}</div>
            </section>
            <section className="flex flex-col col-start-10 col-span-3">
                <label htmlFor="zip">Zip</label>
                <input 
                    type="text" 
                    id="zip" 
                    name="zip" 
                    placeholder="Zip" 
                    className={`border border-black rounded-sm pl-2 ${handleFieldColor("zip")}`} 
                    value={currentContact.zip} 
                    onChange={handleChange} />
                <div className={`${handleFieldColor("zip")}`}>{handleFieldStatus("zip")}</div>
            </section>
            <section className="col-start-1 col-span-12">
                <input onChange={setTerms} type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms" className={`pl-2 `}>Agree to terms and conditions</label>
            </section>
            <section className="col-start-1 col-span-12">
                <button type="submit" className="bg-blue-500 text-white rounded-md p-2">Submit form</button>
            </section>
        </form>
    </div>);
}

export default Contact;