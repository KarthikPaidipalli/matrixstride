export default function Career() {
    return (
        <div className="bg-white min-h-screen py-12 md:py-20 px-6 md:px-20 mt-10">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Join Our Team
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We're building a team of passionate problem solvers and creative thinkers
                        who want to make an impact through technology.
                    </p>
                </div>

                {/* Current Openings Card */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-12 shadow-sm">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="bg-blue-50 p-3 rounded-lg">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                                No current openings
                            </h2>
                            <p className="text-gray-600">
                                We appreciate your interest! While we don't have any open positions right now,
                                we're always happy to connect with talented individuals. Check back soon or
                                send us your information for future opportunities.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Stay in touch
                    </h3>
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Send your resume and cover letter to:
                        </p>
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a
                                href="mailto:careers@solutionengineering.com"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                careers@solutionengineering.com
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                            We review all submissions and will contact you if there's a potential match.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}