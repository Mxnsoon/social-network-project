import React from "react";
import {useFormik} from "formik";
import s from './ProfileInfo.module.css';
import styles from "../../Login/Login.module.css";

const ProfileDataForm = ({saveProfile, deactivateEditMode, initialValues}) => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            fullName: initialValues.fullName,
            lookingForAJob: initialValues.lookingForAJob,
            lookingForAJobDescription: initialValues.lookingForAJobDescription,
            aboutMe: initialValues.aboutMe,
            contacts: {
                facebook: initialValues.contacts.facebook,
                website: initialValues.contacts.website,
                vk: initialValues.contacts.vk,
                twitter: initialValues.contacts.twitter,
                instagram: initialValues.contacts.instagram,
                youtube: initialValues.contacts.youtube,
                github: initialValues.contacts.github,
                mainLink: initialValues.contacts.mainLink
            }
        },
        onSubmit: (values, actions) => {
            saveProfile(values, actions).then (() => {
                deactivateEditMode()
            }) .catch(e => {
                console.log(e)
            })
            actions.setSubmitting(false)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <button type="submit">save</button>
            </div>
            {formik.status && <div className={styles.statusError}>{formik.status}</div> }
            <div>
                <b>Full name</b>:
                <div>
                    <label htmlFor="fullName">
                        <input
                            name="fullName"
                            type="text"
                            placeholder={"Name"}
                            onChange={formik.handleChange}
                            value={formik.values.fullName}
                            onBlur={formik.handleBlur}
                        />
                    </label>
                </div>
            </div>
            <div>
                <b>Looking for a job</b>:
                <label htmlFor="lookingForAJob">
                    <input type="checkbox"
                           name="lookingForAJob"
                           onChange={formik.handleChange}
                           checked={formik.values.lookingForAJob}
                           onBlur={formik.handleBlur}
                    />
                </label>
            </div>
            <div>
                <b>My professional skills</b>:
                <div>
                    <label htmlFor="lookingForAJobDescription">
                        <textarea
                            name="lookingForAJobDescription"
                            placeholder={"Skills"}
                            onChange={formik.handleChange}
                            value={formik.values.lookingForAJobDescription}
                            onBlur={formik.handleBlur}
                        />
                    </label>
                </div>
            </div>
            <div>
                <b>About me</b>:
                <div>
                    <label htmlFor="aboutMe">
                    <textarea
                        name="aboutMe"
                        placeholder={"About me"}
                        onChange={formik.handleChange}
                        value={formik.values.aboutMe}
                        onBlur={formik.handleBlur}
                    />
                    </label>
                </div>
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(initialValues.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}</b>:
                    <div>
                        <label htmlFor={"contacts." + key}>
                            <input
                                name={"contacts." + key}
                                type="text"
                                placeholder={key}
                                onChange={formik.handleChange}
                                value={formik.values.contacts[key] || ""}
                                onBlur={formik.handleBlur}
                            />
                        </label>
                    </div>
                </div>
            })}
            </div>
        </form>
    )
}

export default ProfileDataForm;