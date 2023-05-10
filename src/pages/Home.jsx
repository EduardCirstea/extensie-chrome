import { useState, useEffect } from 'react'
import axios from 'axios'
import { Response, Spinner } from '../components'

const Home = () => {
  const [formData, setFormData] = useState({
    url: '',
    description: '',
  })
  const [data, setData] = useState('hello world')
  const [loading, setLoading] = useState(false)
  const { url, description } = formData

  const response = true
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleClick = (e) => {
    e.preventDefault()
    setFormData({ url: '', description: '' })
    setLoading(true)
    setData('')
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // const userData = {
    //   email,
    //   password,
    // }
  }
  if (loading) {
    return <Spinner />
  } else {
    return (
      <section className="home-page">
        <h1>AION - Your personal asistent</h1>
        <h3>Provide me with information</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="url">Enter url</label>
            <input
              type="url"
              className="form-control"
              value={url}
              name="url"
              id="url"
              onChange={onChange}
              placeholder="Enter url of the website"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Text for AI</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              placeholder="Tell me what you want me to do"
              value={description}
              onChange={onChange}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
        {response && <Response response={data} handleClick={handleClick} />}
      </section>
    )
  }
}
export default Home
