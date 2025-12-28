import { useReducer } from 'react'
import './App.css'

const initialState = {
  step: 1,
  values: {
    name: '',
    email: '',
    username: '',
    password: '',
  },
  isSubmitted: false,
  errors: {},
}

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD': {
      const nextErrors = { ...state.errors }
      if (nextErrors[action.field]) {
        nextErrors[action.field] = ''
      }
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value },
        isSubmitted: false,
        errors: nextErrors,
      }
    }
    case 'SET_ERRORS':
      return { ...state, errors: action.errors }
    case 'NEXT_STEP':
      return { ...state, step: Math.min(state.step + 1, 3) }
    case 'PREVIOUS_STEP':
      return { ...state, step: Math.max(state.step - 1, 1) }
    case 'SUBMIT_FORM':
      return { ...state, isSubmitted: true }
    case 'RESET_FORM':
      return initialState
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { step, values, errors, isSubmitted } = state

  const validateStep = (currentStep) => {
    const nextErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (currentStep === 1) {
      if (!values.name.trim()) {
        nextErrors.name = 'Name is required'
      }
      if (!values.email.trim()) {
        nextErrors.email = 'Email is required'
      } else if (!emailPattern.test(values.email.trim())) {
        nextErrors.email = 'Enter a valid email'
      }
    }

    if (currentStep === 2) {
      if (!values.username.trim()) {
        nextErrors.username = 'Username is required'
      }
      if (!values.password.trim()) {
        nextErrors.password = 'Password is required'
      } else if (values.password.trim().length < 6) {
        nextErrors.password = 'Password must be at least 6 characters'
      }
    }

    return nextErrors
  }

  const handleNext = () => {
    const nextErrors = validateStep(step)
    if (Object.keys(nextErrors).length) {
      dispatch({ type: 'SET_ERRORS', errors: nextErrors })
      return
    }
    dispatch({ type: 'SET_ERRORS', errors: {} })
    dispatch({ type: 'NEXT_STEP' })
  }

  const handlePrevious = () => dispatch({ type: 'PREVIOUS_STEP' })

  const handleSubmit = () => {
    const combinedErrors = {
      ...validateStep(1),
      ...validateStep(2),
    }

    if (Object.keys(combinedErrors).length) {
      dispatch({ type: 'SET_ERRORS', errors: combinedErrors })
      return
    }

    dispatch({ type: 'SET_ERRORS', errors: {} })
    dispatch({ type: 'SUBMIT_FORM' })
  }

  const handleReset = () => dispatch({ type: 'RESET_FORM' })

  const onChange = (field) => (event) => {
    dispatch({ type: 'UPDATE_FIELD', field, value: event.target.value })
  }

  const isNextDisabled = () => {
    if (step === 1) {
      return !values.name.trim() || !values.email.trim()
    }
    if (step === 2) {
      return !values.username.trim() || !values.password.trim()
    }
    return false
  }

  const progressPercent = (step / 3) * 100

  const renderStepFields = () => {
    if (step === 1) {
      return (
        <div className="fields-grid">
          <label className="field">
            <span>Name</span>
            <input
              type="text"
              value={values.name}
              onChange={onChange('name')}
              placeholder="Enter your full name"
            />
            {errors.name ? <p className="error">{errors.name}</p> : null}
          </label>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              value={values.email}
              onChange={onChange('email')}
              placeholder="you@example.com"
            />
            {errors.email ? <p className="error">{errors.email}</p> : null}
          </label>
        </div>
      )
    }

    if (step === 2) {
      return (
        <div className="fields-grid">
          <label className="field">
            <span>Username</span>
            <input
              type="text"
              value={values.username}
              onChange={onChange('username')}
              placeholder="Choose a username"
            />
            {errors.username ? <p className="error">{errors.username}</p> : null}
          </label>
          <label className="field">
            <span>Password</span>
            <input
              type="password"
              value={values.password}
              onChange={onChange('password')}
              placeholder="At least 6 characters"
            />
            {errors.password ? <p className="error">{errors.password}</p> : null}
          </label>
        </div>
      )
    }

    return (
      <div className="review">
        <div className="review-row">
          <span>Full Name</span>
          <strong>{values.name || '—'}</strong>
        </div>
        <div className="review-row">
          <span>Email</span>
          <strong>{values.email || '—'}</strong>
        </div>
        <div className="review-row">
          <span>Username</span>
          <strong>{values.username || '—'}</strong>
        </div>
        <div className="review-row">
          <span>Password</span>
          <strong>{values.password ? '•••••••' : '—'}</strong>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <p className="eyebrow">Multi-step registration</p>
        <h1>Join the platform</h1>
        <p className="subhead">
          Progress through the steps to create your account. All state is managed
          with useReducer for predictable updates.
        </p>
      </header>

      <section className="card">
        <div className="progress">
          <div className="progress-labels">
            <span>Step {step} of 3</span>
            <span>{Math.round(progressPercent)}%</span>
          </div>
          <div className="progress-bar">
            <span style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <div className="step-header">
          <div className={`step-pill ${step === 1 ? 'active' : ''}`}>1. Personal</div>
          <div className={`step-pill ${step === 2 ? 'active' : ''}`}>2. Account</div>
          <div className={`step-pill ${step === 3 ? 'active' : ''}`}>3. Review</div>
        </div>

        {renderStepFields()}

        <div className="actions">
          <button
            className="ghost"
            onClick={handlePrevious}
            disabled={step === 1}
          >
            Previous
          </button>

          {step < 3 ? (
            <button onClick={handleNext} disabled={isNextDisabled()}>
              Next
            </button>
          ) : (
            <button onClick={handleSubmit} className="primary">
              Submit
            </button>
          )}
        </div>
      </section>

      {isSubmitted ? (
        <div className="success">
          <h2>All set!</h2>
          <p>Your registration details were submitted successfully.</p>
          <div className="summary">
            <p>
              <span>Name:</span> {values.name}
            </p>
            <p>
              <span>Email:</span> {values.email}
            </p>
            <p>
              <span>Username:</span> {values.username}
            </p>
          </div>
          <button onClick={handleReset}>Start over</button>
        </div>
      ) : null}
    </div>
  )
}

export default App
