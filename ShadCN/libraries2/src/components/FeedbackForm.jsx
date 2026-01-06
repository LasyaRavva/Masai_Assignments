import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter, Input, Textarea, Button } from '../ui/index.js'

export function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  })
  const [submissions, setSubmissions] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.feedback) {
      setSubmissions((prev) => [...prev, { ...formData, id: Date.now() }])
      setFormData({ name: '', email: '', feedback: '' })
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Feedback Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Feedback</label>
              <Textarea
                name="feedback"
                placeholder="Enter your feedback"
                value={formData.feedback}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full">
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>

      {submissions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Submitted Feedback</h2>
          <div className="space-y-4">
            {submissions.map((submission) => (
              <Card key={submission.id}>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <p className="font-semibold">
                      <span className="text-slate-600">Name:</span> {submission.name}
                    </p>
                    <p className="font-semibold">
                      <span className="text-slate-600">Email:</span> {submission.email}
                    </p>
                    <p className="font-semibold">
                      <span className="text-slate-600">Feedback:</span> {submission.feedback}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
