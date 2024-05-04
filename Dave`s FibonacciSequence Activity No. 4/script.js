function startFiboSeq() {
    const termsNum = document.getElementById('termsNum').value;
    const list = document.getElementById('fiboListSeq');
    const errorMess = document.getElementById('errorMess');
    list.innerHTML = '';
    errorMess.textContent = '';

    // Input validation
    if (!termsNum || termsNum < 1 || termsNum >= 100) {
        errorMess.textContent = 'Please enter a valid number of terms (1-99).';
        return;
    }

    let x = 0, y = 1, z;
    for (let i = 0; i < termsNum; i++) {
        const turns = document.createElement('li');
        turns.textContent = x;
        list.appendChild(turns);
        z = x + y;
        x = y;
        y = z;
    }
}
