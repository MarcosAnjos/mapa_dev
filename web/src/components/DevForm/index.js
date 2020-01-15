import React, { useState, useEffect } from 'react'

function DevForm() {
    // para usar deve setar useState 
    const [github_username, setGithubUsername] = useState('')
    const [techs, setTechs] = useState('')
    // criar um estado guardar a localizacao
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    // funcao para pegar a localizacao navegador
    useEffect(() => {
        // funcao do proprio nagevador - nativo
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // console.log(position)
                const { latitude, longitude } = position.coords
                setLatitude(latitude)
                setLongitude(longitude)
            },
            (err) => {
                console.log(err)
            },
            {
                // time de 30s para buscar a localizacao
                timeout: 30000,
            }
        )
    }, [])
    // fim - geolocation

    // funcao que mostra novo dev pagina
    await function handleSubmit(e) {
        e.preventDefault()
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        })
        // estou limpado os dados da minha tela, para cadastrar outro dev :3
        setGithubUsername('')
        setTechs('')
    }
    // fim

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="username_github">Usuário do Github</label>
                <input name="github_username"
                    id="github_username"
                    required
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)}
                ></input>

                <label htmlFor="techs">Tecnologia</label>
                <input name="techs"
                    id="techs"
                    required
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                ></input>
            </div>

            <div className="input-group">

                {/* label latitude */}
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input type="number"
                        name="latitude"
                        id="latitude"
                        required value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    />
                </div>

                {/* label longitude */}
                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input type="number"
                        name="longitude"
                        id="longitude"
                        required value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    />
                </div>
            </div>
            <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm