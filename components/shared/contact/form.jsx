"use client";

import { useState, useEffect } from "react";

export default function ContactOptionsForms() {
  // Sales Form State
  const [salesForm, setSalesForm] = useState({
    contactName: "",
    email: "",
    phoneInternational: "",
    institutionType: "",
    estimatedSeatsDevices: "",
    startYourPreference: "",
    procurementNeeds: "",
    message: "",
  });

  // Support Form State
  const [supportForm, setSupportForm] = useState({
    contactName: "",
    email: "",
    role: "",
    environment: "",
    issueType: "",
    description: "",
  });

  // Press Form State
  const [pressForm, setPressForm] = useState({
    email: "",
    message: "",
  });

  // Partnerships Form State
  const [partnershipsForm, setPartnershipsForm] = useState({
    email: "",
    message: "",
  });

  // Submission States
  const [salesSubmitting, setSalesSubmitting] = useState(false);
  const [supportSubmitting, setSupportSubmitting] = useState(false);
  const [pressSubmitting, setPressSubmitting] = useState(false);
  const [partnershipsSubmitting, setPartnershipsSubmitting] = useState(false);

  // Success Messages
  const [salesSuccess, setSalesSuccess] = useState(false);
  const [supportSuccess, setSupportSuccess] = useState(false);
  const [pressSuccess, setPressSuccess] = useState(false);
  const [partnershipsSuccess, setPartnershipsSuccess] = useState(false);

  // Form Handlers
  const handleSalesSubmit = async (e) => {
    e.preventDefault();
    setSalesSubmitting(true);

    try {
      // Add your API call here
      // await fetch('/api/contact/sales', { method: 'POST', body: JSON.stringify(salesForm) });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSalesSuccess(true);
      setSalesForm({
        contactName: "",
        email: "",
        phoneInternational: "",
        institutionType: "",
        estimatedSeatsDevices: "",
        startYourPreference: "",
        procurementNeeds: "",
        message: "",
      });

      setTimeout(() => setSalesSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting sales form:", error);
    } finally {
      setSalesSubmitting(false);
    }
  };

  const handleSupportSubmit = async (e) => {
    e.preventDefault();
    setSupportSubmitting(true);

    try {
      // Add your API call here
      // await fetch('/api/contact/support', { method: 'POST', body: JSON.stringify(supportForm) });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSupportSuccess(true);
      setSupportForm({
        contactName: "",
        email: "",
        role: "",
        environment: "",
        issueType: "",
        description: "",
      });

      setTimeout(() => setSupportSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting support form:", error);
    } finally {
      setSupportSubmitting(false);
    }
  };

  const handlePressSubmit = async (e) => {
    e.preventDefault();
    setPressSubmitting(true);

    try {
      // Add your API call here
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setPressSuccess(true);
      setPressForm({ email: "", message: "" });

      setTimeout(() => setPressSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting press form:", error);
    } finally {
      setPressSubmitting(false);
    }
  };

  const handlePartnershipsSubmit = async (e) => {
    e.preventDefault();
    setPartnershipsSubmitting(true);

    try {
      // Add your API call here
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setPartnershipsSuccess(true);
      setPartnershipsForm({ email: "", message: "" });

      setTimeout(() => setPartnershipsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting partnerships form:", error);
    } finally {
      setPartnershipsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-secondary text-center mb-12">
          Contact Options
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Sales & Partnerships Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary mb-2">
              Sale & Partnerships
            </h3>

            {salesSuccess && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                Thank you! We'll get back to you within 3-5 business days.
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="sales-contact-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contact Name
                </label>
                <input
                  id="sales-contact-name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  value={salesForm.contactName}
                  onChange={(e) =>
                    setSalesForm({ ...salesForm, contactName: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="sales-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="sales-email"
                  type="email"
                  placeholder="your.email@school.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  value={salesForm.email}
                  onChange={(e) =>
                    setSalesForm({ ...salesForm, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="sales-phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone (international)
                </label>
                <input
                  id="sales-phone"
                  type="tel"
                  placeholder="+234 XXX XXX XXXX"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  value={salesForm.phoneInternational}
                  onChange={(e) =>
                    setSalesForm({
                      ...salesForm,
                      phoneInternational: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="sales-institution"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Institution Type
                </label>
                <select
                  id="sales-institution"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition bg-white"
                  value={salesForm.institutionType}
                  onChange={(e) =>
                    setSalesForm({
                      ...salesForm,
                      institutionType: e.target.value,
                    })
                  }
                >
                  <option value="">Select</option>
                  <option value="school">School</option>
                  <option value="district">District</option>
                  <option value="ngo">NGO</option>
                  <option value="university">University</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="sales-seats"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Estimated Seats/Devices
                </label>
                <input
                  id="sales-seats"
                  type="text"
                  placeholder="E.g., 15+ Devices, 25 Devices"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  value={salesForm.estimatedSeatsDevices}
                  onChange={(e) =>
                    setSalesForm({
                      ...salesForm,
                      estimatedSeatsDevices: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="sales-start"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Start Year/Preference
                </label>
                <input
                  id="sales-start"
                  type="text"
                  placeholder="E.g., Jan 2026"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  value={salesForm.startYourPreference}
                  onChange={(e) =>
                    setSalesForm({
                      ...salesForm,
                      startYourPreference: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="sales-procurement"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Procurement Needs
                </label>
                <select
                  id="sales-procurement"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition bg-white"
                  value={salesForm.procurementNeeds}
                  onChange={(e) =>
                    setSalesForm({
                      ...salesForm,
                      procurementNeeds: e.target.value,
                    })
                  }
                >
                  <option value="">Select</option>
                  <option value="immediate">Immediate</option>
                  <option value="planning">Planning Phase</option>
                  <option value="budgeting">Budgeting</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="sales-message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="sales-message"
                  rows={4}
                  placeholder="Tell us about your needs"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                  value={salesForm.message}
                  onChange={(e) =>
                    setSalesForm({ ...salesForm, message: e.target.value })
                  }
                />
              </div>

              <p className="text-xs text-gray-500">
                What to expect: Response within 3-5 business days for general
                inquiries. Paid accounts receive priority support.
              </p>

              <button
                onClick={handleSalesSubmit}
                disabled={salesSubmitting}
                className="w-full bg-primary text-white font-semibold py-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {salesSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </div>

          {/* Support Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary mb-2">Support</h3>

            {supportSuccess && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                Support request submitted! We'll respond within 24h (paid) or
                3-5 days (free).
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="support-contact-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contact Name
                </label>
                <input
                  id="support-contact-name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  value={supportForm.contactName}
                  onChange={(e) =>
                    setSupportForm({
                      ...supportForm,
                      contactName: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="support-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="support-email"
                  type="email"
                  placeholder="your.email@school.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  value={supportForm.email}
                  onChange={(e) =>
                    setSupportForm({ ...supportForm, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="support-role"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Role
                </label>
                <select
                  id="support-role"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition bg-white"
                  value={supportForm.role}
                  onChange={(e) =>
                    setSupportForm({ ...supportForm, role: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Administrator</option>
                  <option value="student">Student</option>
                  <option value="parent">Parent</option>
                  <option value="it">IT Staff</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="support-environment"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Environment
                </label>
                <select
                  id="support-environment"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition bg-white"
                  value={supportForm.environment}
                  onChange={(e) =>
                    setSupportForm({
                      ...supportForm,
                      environment: e.target.value,
                    })
                  }
                >
                  <option value="">Select</option>
                  <option value="web">Web Browser</option>
                  <option value="mobile">Mobile App</option>
                  <option value="desktop">Desktop App</option>
                  <option value="tablet">Tablet</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="support-issue"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Issue Type
                </label>
                <select
                  id="support-issue"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition bg-white"
                  value={supportForm.issueType}
                  onChange={(e) =>
                    setSupportForm({
                      ...supportForm,
                      issueType: e.target.value,
                    })
                  }
                >
                  <option value="">Select</option>
                  <option value="technical">Technical Issue</option>
                  <option value="account">Account Access</option>
                  <option value="content">Content Question</option>
                  <option value="billing">Billing</option>
                  <option value="feature">Feature Request</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="support-description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="support-description"
                  rows={4}
                  required
                  placeholder="Please describe your issue or question in detail..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                  value={supportForm.description}
                  onChange={(e) =>
                    setSupportForm({
                      ...supportForm,
                      description: e.target.value,
                    })
                  }
                />
              </div>

              <p className="text-xs text-gray-500">
                What to expect: Response target 24h (paid) • 3-5 business days
                (free). We'll review your request and get back to you as quickly
                as possible.
              </p>

              <button
                onClick={handleSupportSubmit}
                disabled={supportSubmitting}
                className="w-full bg-primary text-white font-semibold py-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {supportSubmitting ? "Submitting..." : "Submit Support Request"}
              </button>
            </div>
          </div>
        </div>

        {/* Press & Media and Partnerships */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Press & Media */}
          <div className="bg-gray-100 rounded-2xl p-8 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-secondary">Press & Media</h3>
            <p className="text-lg">
              Email:&nbsp;
              <a
                href="mailto:info@bluesandacademy.org"
                className="text-primary hover:underline"
              >
                info@bluesandsacademy.org
              </a>
            </p>
            <p className="text-base text-gray-700">
              <span className="text-primary font-semibold">
                What we provide:
              </span>
              &nbsp; Media kit, logos, product images, interview availability.
            </p>
          </div>

          {/* Partnerships */}
          <div className="bg-gray-100 rounded-2xl p-8 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-secondary">
              Partnerships (NGOs, Foundations, Government)
            </h3>
            <p className="text-lg">
              Email:&nbsp;
              <a
                href="mailto:partnership@bluesandacademy.org"
                className="text-primary hover:underline"
              >
                partnership@bluesandsacademy.org
              </a>
            </p>
            <p className="text-base text-gray-700">
              <span className="text-primary font-semibold">
                What we provide:
              </span>
              &nbsp; Program design for low-connectivity deployments, impact
              measurement, training plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
