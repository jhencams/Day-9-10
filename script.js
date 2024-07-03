$(document).ready(function() {
    $('#calculate').on('click', function() {
        const name = $('#name').val();
        const birthday = $('#birthday').val();
        if (!name || !birthday) {
            $('#result').text('Please enter both name and birthday.');
            return;
        }

        const age = calculateAge(new Date(birthday));
        $('#result').html(`${name}, you are ${age} years old.`);
    });
});

function calculateAge(birthday) {
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDifference = today.getMonth() - birthday.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}