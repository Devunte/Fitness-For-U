const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#workout-name').value.trim();
    const description = document.querySelector('#workout-desc').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (name && description) {
        // const id = req.params.id;
        console.log(id); //?
        const response = await fetch(`/api/workouts/${id}`, {
            method: 'POST',
            body: JSON.stringify({ name, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/exercise/${id}`);
        } else {
            alert('Failed to create workout');
        }
    }
};

document
    .querySelector('.workout-add-form')
    .addEventListener('submit', newFormHandler);
