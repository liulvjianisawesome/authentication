import React from 'react'
import PropTypes from 'proptypes'

const Errors = (props) => {
  const { errors } = props
  return (
    <div>
      <ul>
        {
          errors.map(error => (
            <li key={error.time}>{errors.body}</li>
          ))
        }
      </ul>
    </div>
  )
}

Error.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      time: PropTypes.date,
    })
  )
}

export default Errors