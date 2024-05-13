console.log('Hello');
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id);

        const response = await fetch(`/api/workouts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete workout');
        }
    }
};

document
    .querySelector('.workouts-section')
    .addEventListener('click', delButtonHandler);