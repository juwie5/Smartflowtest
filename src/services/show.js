export function show(){
    let password = document.getElementById('password')
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
           
}