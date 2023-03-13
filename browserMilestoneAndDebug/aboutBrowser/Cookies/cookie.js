// get any websites cookie value
document.cookie.split('; ').map(c => {
    const parts = c.split('=');
    console.log(`name: ${parts[0]} value: ${parts[1]}`)
})