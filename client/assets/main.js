$(document).ready(function() {
    if(localStorage.getItem('accesstoken')) {
        showMainPage()
    } else {
        showRegisterPage()
    }

    $('#register-form').on("submit", function(e) {
        e.preventDefault()
        register()
    })

    $('#login-form').on("submit", function(e) {
        e.preventDefault()
        login()
    })
    
    $("#todo-form").on("submit", function(e) {
        e.preventDefault()
        createTodo()
    })
})