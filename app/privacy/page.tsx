import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | InterviewPrep',
  description: 'Privacy Policy for InterviewPrep - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-black shadow-sm rounded-lg overflow-hidden">
          <div className="px-6 py-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to InterviewPrep. We are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, disclose, and 
                safeguard your information when you use our interview preparation platform.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-lg font-medium text-gray-800 mb-3">Information from Google Sign-In</h3>
              <p className="text-gray-700 mb-4">
                When you sign in using Google OAuth, we collect the following information from your Google account:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your Google profile picture</li>
                <li>Your Google account ID (for authentication purposes)</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-3">Information You Provide</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                <li>Interview practice responses and recordings</li>
                <li>Profile information and preferences</li>
                <li>Feedback and communications with our support team</li>
                <li>Usage data and interaction patterns within the platform</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our platform</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Provide and maintain our interview preparation services</li>
                <li>Authenticate your account and ensure platform security</li>
                <li>Personalize your learning experience and track progress</li>
                <li>Send you important updates about our services</li>
                <li>Improve our platform through analytics and user feedback</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Service Providers:</strong> With trusted third-party providers who assist in operating our platform</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> When you have given us explicit consent to share your information</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure data storage with reputable cloud providers</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>
            </section>

            {/* Google OAuth and Third-Party Services */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Google OAuth and Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                Our platform uses Google OAuth 2.0 for authentication. When you sign in with Google:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>You are redirected to Google's secure authentication servers</li>
                <li>We only receive the information you consent to share</li>
                <li>Your Google password is never stored or accessed by our platform</li>
                <li>You can revoke access at any time through your Google account settings</li>
              </ul>
              <p className="text-gray-700">
                Please review Google's Privacy Policy to understand how Google handles your information: 
                <a href="https://policies.google.com/privacy" 
                   className="text-blue-600 hover:text-blue-800 underline ml-1"
                   target="_blank" 
                   rel="noopener noreferrer">
                  Google Privacy Policy
                </a>
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700">
                We retain your personal information for as long as necessary to provide our services and fulfill 
                the purposes outlined in this Privacy Policy. When you delete your account, we will remove your 
                personal information within 30 days, except for information we are required to retain for legal 
                or regulatory purposes.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Update:</strong> Correct or update your personal information</li>
                <li><strong>Delete:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a machine-readable format</li>
                <li><strong>Withdraw Consent:</strong> Revoke consent for data processing at any time</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your experience on our platform:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Essential Cookies:</strong> Required for authentication and basic functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our platform</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can control cookies through your browser settings, though disabling certain cookies may 
                affect platform functionality.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not intended for children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If you believe we have collected information from 
                a child under 13, please contact us immediately so we can delete such information.
              </p>
            </section>

            {/* International Users */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Users</h2>
              <p className="text-gray-700">
                If you are accessing our platform from outside the United States, please note that your 
                information may be transferred to, stored, and processed in the United States where our 
                servers are located. By using our services, you consent to this transfer.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage 
                you to review this Privacy Policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> cealadigital@gmail.com</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> 24, Tennyson Road, Luton</p>
                <p className="text-gray-700"><strong>Phone:</strong> 07861195631</p>
              </div>
            </section>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}