const hewan = [
        {id: 1, nama: 'Snowy', spesies: 'kucing'},
        {id: 2, nama: 'Blacki', spesies: 'anjing'},
        {id: 3, nama: 'Molly', spesies: 'kucing'},
        {id: 4, nama: 'Milo', spesies: 'kelinci'},
        {id: 5, nama: 'Rere', spesies: 'kucing'},
    ]

    export const Index = async(req, res) => {
        try{
            res.status(200)
            res.json(hewan)
        }catch(e){
            console.log(e)
        }
    }

    export const IndexOne = async (req, res) => {
        try{
            let code = req.params.id
            let khewan = hewan.find(item => item.id === Number(code))
            res.status(200).json(khewan)
        }catch(e){
            console.log(e)
        }

    }

    export const Update = async (req, res) => {
        try{
            let code = req.params.id
            let khewan = hewan.findIndex(item => item.id === Number(code))
            if(khewan !== -1) {
                hewan[khewan].nama = req.body.nama || hewan[khewan].nama
                hewan[khewan].spesies = req.body.spesies || hewan[khewan].spesies
            }
            res.status(200).json({
                msg: "Berhasil update hewan",
                data: hewan
            })
        }catch(e){
            console.log(e)
        }
    }

    export const Delete = async (req, res) => {
        try{
            let code = req.params.id
            let khewan = hewan.findIndex(item => item.id === Number(code))
            if(khewan !== -1) {
                hewan.splice(khewan, 1)
            }
            res.status(200).json({
                msg: "Berhasil hapus hewan",
                data: hewan
            })
        }catch(e){
            console.log(e)
        }
    }

    export const Store = async(req, res) => {
        const { nama, spesies } = req.body
        try{
            let newHewan = {
                id : hewan.length + 1,
                nama : nama,
                spesies : spesies
            }
            hewan.push(newHewan)
            res.status(200)
            res.json({
                msg: "Berhasil tambah hewan",
                data: hewan
            })
        }catch(e){
            console.log(e)
        }
    }