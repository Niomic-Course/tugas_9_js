function dataMahasiswa() {
    let biodata = {
        nama: 'Saddam',
        umur: 28,
        tinggi: 170,
        pendidikan: ['SD', 'SMP', 'SMA']
    }

    for (let x in biodata){
        console.log(`${x} = ${biodata[x]}`);
    }
}

dataMahasiswa()