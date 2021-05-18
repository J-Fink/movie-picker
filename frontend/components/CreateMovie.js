import useForm from "../lib/useForm";

export default function CreateMovie() {
    const { inputs, handleChange, clearForm, resetForm } = useForm({
           //have to add below any extra fields to the Add A Movie page
        name: '',
        description: '',
        rating: '',
    });
    return (
        <form>
            <label htmlFor="name">
                Name
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={inputs.name}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="description">
                Description
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={inputs.description}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="rating">
                Rating
                <input
                    type="select"
                    id="rating"
                    name="rating"
                    placeholder="Rating"
                    value={inputs.rating}
                    onChange={handleChange}
                />
            </label>
            <button type="button" onClick={clearForm}>Clear Form</button>
            <button type="button" onClick={resetForm}>Reset Form</button>
        </form>
    )
}