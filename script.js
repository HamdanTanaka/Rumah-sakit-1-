let nomorAntrian = 1;

function prosesPendaftaran() {
    const namaPasien = document.getElementById('namaPasien').value;
    const umurPasien = document.getElementById('umurPasien').value;
    const alamatPasien = document.getElementById('alamatPasien').value;
    let pilihanLayanan = document.getElementById('pilihanLayanan').value;
    const output = document.getElementById('output');
    output.innerHTML = "";

    if (!namaPasien || !umurPasien || !alamatPasien) {
        alert("Mohon lengkapi semua data pasien.");
        return;
    }

    output.innerHTML += `<h3>Nomor Antrian Anda: ${nomorAntrian}</h3>`;
    nomorAntrian++;

    if (pilihanLayanan == "1") {
        let statusBPJS = prompt("Silakan tunjukkan kartu BPJS dan KTP.\nApakah kartu BPJS aktif? (ya/tidak)");
        if (statusBPJS && statusBPJS.toLowerCase() === "ya") {
            output.innerHTML += "<p>Pendaftaran pasien BPJS berhasil.</p>";
        } else {
            output.innerHTML += "<p>BPJS tidak aktif, lanjut sebagai pasien Mandiri.</p>";
            pilihanLayanan = "2";
        }
    }

    if (pilihanLayanan == "2") {
        output.innerHTML += "<p>Pendaftaran pasien Mandiri berhasil.</p>";
    }

    output.innerHTML += `
        <p>Pasien dipersilakan ke ruang pemeriksaan.</p>
        <p>Pemeriksaan/Perawatan selesai. Silakan menuju kasir.</p>
    `;

    if (pilihanLayanan == "1") {
        output.innerHTML += "<p>Tagihan ditanggung BPJS.</p>";
        let adaBiayaTambahan = prompt("Ada biaya tambahan? (ya/tidak)");
        if (adaBiayaTambahan && adaBiayaTambahan.toLowerCase() === "ya") {
            let biayaTambahan = prompt("Masukkan jumlah biaya tambahan:");
            output.innerHTML += `<p>Total biaya tambahan yang harus dibayar: Rp ${biayaTambahan}</p>`;
            pilihMetodePembayaran(output);
        } else {
            output.innerHTML += "<p>Tidak ada biaya tambahan. Terima kasih.</p>";
        }
    } else {
        let totalBiaya = prompt("Masukkan total biaya pelayanan:");
        output.innerHTML += `<p>Total biaya: Rp ${totalBiaya}</p>`;
        pilihMetodePembayaran(output);
    }

    output.innerHTML += `<p>Transaksi selesai. Terima kasih, ${namaPasien} telah berkunjung.</p>`;
}

function pilihMetodePembayaran(output) {
    let metodePembayaran = prompt("Pilih metode pembayaran: 1. Cash 2. Debit");
    if (metodePembayaran === "1") {
        output.innerHTML += "<p>Silakan bayar dengan uang tunai.</p>";
    } else if (metodePembayaran === "2") {
        output.innerHTML += "<p>Silakan bayar dengan kartu debit.</p>";
    } else {
        output.innerHTML += "<p>Metode pembayaran tidak valid.</p>";
    }
}
