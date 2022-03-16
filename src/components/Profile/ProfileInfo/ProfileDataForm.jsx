import React from "react";
import {useFormik} from "formik";
import s from './ProfileInfo.module.css';

const ProfileDataForm = ({saveProfile, profile, deactivateEditMode}) => {
    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe: profile.aboutMe
        },
        onSubmit: values => {
            saveProfile(values)
            deactivateEditMode()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <button type="submit">save</button>
            </div>
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
                    <input type="checkbox" name="lookingForAJob" onChange={formik.handleChange}/>
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
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div className={s.contact}>
                    <b>{key}</b>:
                    <div>
                        <label htmlFor={"contacts." + key}>
                            <input
                                name={"contacts." + key}
                                type="text"
                                placeholder={key}
                                onChange={formik.handleChange}
                                value={formik.values.key}
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