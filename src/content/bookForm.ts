// Labels, placeholders, and messages for the booking request form.

export const bookForm = {
  fields: {
    name: {
      label: "Full name",
      placeholder: "Your full name",
      error: "Please tell us your name.",
    },
    phone: {
      label: "Phone number",
      placeholder: "(714) 555-0123",
      error: "We need a phone number to confirm your appointment.",
    },
    email: {
      label: "Email (optional)",
      placeholder: "you@example.com",
      error: "That email does not look right.",
    },
    preferred: {
      label: "Preferred days and times",
      placeholder: "Weekday afternoons, or a Saturday morning",
      error: "Let us know what days or times generally work.",
    },
    service: {
      label: "What do you need?",
      error: "Please pick the closest option.",
    },
    newPatient: {
      label: "Are you a new patient?",
      yes: "Yes, this is my first visit",
      no: "No, I have been here before",
    },
    insurance: {
      label: "Insurance carrier (optional)",
      placeholder: "Delta Dental, MetLife, Denti-Cal...",
    },
    message: {
      label: "Anything else? (optional)",
      placeholder: "Pain, questions, or anything we should know before you come in.",
    },
  },
  notSure: "Not sure yet",
  submit: "Send Booking Request",
  submitting: "Sending...",
  errorGeneric:
    "Something went wrong sending your request. Please try again in a moment, or call us at (714) 540-7101.",
  errorTooFast: "That was quick! Please take a moment to review your details and send again.",
  errorRate:
    "We have received several requests from this connection. Please call us at (714) 540-7101 and we will help you directly.",
};
