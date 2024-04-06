import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    }

    if (!values.remarks) {
        errors.remarks = 'Required';
    }

    return errors;
};

export default function Form({ addNewComment }) {

    const formik = useFormik({
        initialValues: {
            username: '',
            rating: '5',
            remarks: '',
        },
        validate,
        onSubmit: values => {
            // Call addNewComment to add the new comment
            addNewComment(values);
            // Reset form values after submission
            formik.resetForm();
        },
    });

    return (
        <>
            <h2>Form</h2>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='username'>Username:</label>&nbsp;&nbsp;
                <input placeholder='enter the username' type="text" value={formik.values.username} id="username" name="username" onChange={formik.handleChange} />
                {formik.errors.username ? <p style={{ color: "red" }}>{formik.errors.username}</p> : null}
                <br /><br />

                <label htmlFor='rating'>Rating:</label>&nbsp;&nbsp;
                <input placeholder='1-5' type="number" min={1} max={5} value={formik.values.rating} id="rating" name="rating" onChange={formik.handleChange} />
                {formik.errors.rating ? <p style={{ color: "red" }}>{formik.errors.rating}</p> : null}
                <br /><br />

                <label htmlFor='remarks'>Remarks:</label>&nbsp;&nbsp;
                <textarea placeholder='enter the remarks' type="text" value={formik.values.remarks} id="remarks" name="remarks" onChange={formik.handleChange}></textarea>
                {formik.errors.remarks ? <p style={{ color: "red" }}>{formik.errors.remarks}</p> : null}
                <br /><br />

                <button type="submit">Add Comment</button>
            </form>
        </>
    )
}
