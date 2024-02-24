const app = document.getElementById('app');
const hasil = document.getElementById('hasil');

app.addEventListener('submit', (e) => {
    e.preventDefault();

    const bil1 = document.getElementById('bil1').value;
    const bil2 = document.getElementById('bil2').value;
    const operasi = document.getElementById('operasi').value;

    const kalkulator = new Kalkulator(bil1, bil2, operasi);
    const hasilHitung = kalkulator.hitung();

    hasil.innerHTML = Hasil {hasilHitung};
});

class Kalkulator {
    constructor(bil1, bil2, operasi) {
        this.bil1 = bil1;
        this.bil2 = bil2;
        this.operasi = operasi;
    }

    hitung() {
        switch (this.operasi) {
            case '+':
                return parseInt(this.bil1) + parseInt(this.bil2);
            case '-':
                return parseInt(this.bil1) - parseInt(this.bil2);
            case '*':
                return parseInt(this.bil1) * parseInt(this.bil2);
            case '/':
                return parseInt(this.bil1) / parseInt(this.bil2);
        }
    }
}