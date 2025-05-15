"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useTheme } from "../contexts/ThemeContext"

const LandingPage = () => {
    const { theme, toggleTheme } = useTheme()
    const [activeTab, setActiveTab] = useState("monthly")

    const features = [
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                </svg>
            ),
            title: "Extract Business Data",
            description: "Extract business names, addresses, phone numbers, websites, and more from Google Maps.",
        },
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                </svg>
            ),
            title: "Advanced Analytics",
            description: "Get insights into business categories, ratings, and other metrics with our analytics dashboard.",
        },
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
            ),
            title: "Visual Map Results",
            description: "View your extracted data on an interactive map to visualize business locations and density.",
        },
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                </svg>
            ),
            title: "Export Options",
            description: "Export your data in CSV, Excel, or JSON formats for easy integration with your existing tools.",
        },
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                </svg>
            ),
            title: "Batch Processing",
            description: "Run multiple extraction jobs simultaneously and manage them from a centralized dashboard.",
        },
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                </svg>
            ),
            title: "Secure & Private",
            description:
                "Your data is encrypted and never shared with third parties. We prioritize your privacy and security.",
        },
    ]

    const plans = [
        {
            name: "Free",
            price: { monthly: 0, yearly: 0 },
            features: [
                { text: "Monthly leads extract", value: "1,000" },
                { text: "Custom export setting", included: true },
                { text: "Extracts basic information", included: true },
                { text: "Extracts reviews per place", value: "20" },
                { text: "Extracts photos & videos per place", value: "10" },
                { text: "Extracts phone number", included: true },
                { text: "Extracts email and social medias", included: false },
                { text: "Extracts your place lists", included: false },
                { text: "Bulk extracting automatically", included: false },
            ],
            cta: "Get Started",
            popular: false,
        },
        {
            name: "Pro",
            price: { monthly: 39, yearly: 33 },
            originalPrice: { monthly: 49, yearly: 42 },
            features: [
                { text: "Monthly leads extract", value: "100,000" },
                { text: "Custom export setting", included: true },
                { text: "Extracts basic information", included: true },
                { text: "Extracts reviews per place", value: "250" },
                { text: "Extracts photos & videos per place", value: "100" },
                { text: "Extracts phone number", included: true },
                { text: "Extracts email and social medias", included: true },
                { text: "Extracts your place lists", included: true },
                { text: "Bulk extracting automatically", included: false },
            ],
            cta: "Get Started",
            popular: true,
        },
        {
            name: "Business",
            price: { monthly: 99, yearly: 84 },
            originalPrice: { monthly: 129, yearly: 110 },
            features: [
                { text: "Monthly leads extract", value: "500,000" },
                { text: "Custom export setting", included: true },
                { text: "Extracts basic information", included: true },
                { text: "Extracts reviews per place", value: "2,500" },
                { text: "Extracts photos & videos per place", value: "1,000" },
                { text: "Extracts phone number", included: true },
                { text: "Extracts email and social medias", included: true },
                { text: "Extracts your place lists", included: true },
                { text: "Bulk extracting automatically", included: true },
            ],
            cta: "Get Started",
            popular: false,
        },
    ]

    return (
        <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
            {/* Header */}
            <header
                className={`py-6 px-6 md:px-12 lg:px-16 flex items-center justify-between ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
            >
                <div className="flex items-center">
                    <div className="text-pink-500 mr-2">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <span className="text-xl font-bold">G Maps Extractor</span>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className={`
              p-2 rounded-full transition-colors
              ${theme === "dark" ? "bg-gray-700 text-yellow-300" : "bg-gray-200 text-gray-700"}
            `}
                    >
                        {theme === "dark" ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>
                    <Link
                        to="/login"
                        className={`px-4 py-2 rounded-lg ${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"} transition-colors`}
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                    >
                        Sign Up
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 px-6 md:px-12 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Extract Business Data from Google Maps</h1>
                        <p className={`text-xl md:text-2xl mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                            The most powerful tool to extract business information, reviews, and contact details from Google Maps.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/register"
                                className="px-8 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors text-lg font-medium w-full sm:w-auto"
                            >
                                Get Started for Free
                            </Link>
                            <Link
                                to="/pricing"
                                className={`px-8 py-3 rounded-lg text-lg font-medium w-full sm:w-auto ${theme === "dark" ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-700 hover:bg-gray-300"} transition-colors`}
                            >
                                View Pricing
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`rounded-xl overflow-hidden shadow-2xl ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
                    >
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/data-analysis-dashboard-yFnhoVRjs6UHBdvEEz0hWQ0dHo8MwR.png"
                            alt="G Maps Extractor Dashboard"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className={`py-16 px-6 md:px-12 lg:px-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
                        <p className={`text-lg md:text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                            Everything you need to extract and analyze business data from Google Maps
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`p-6 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-white"} shadow-lg`}
                            >
                                <div className="text-pink-500 mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 px-6 md:px-12 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                        <p className={`text-lg md:text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                            Choose the plan that fits your needs
                        </p>

                        <div className="flex items-center justify-center mt-8 mb-8">
                            <div className={`p-1 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`}>
                                <button
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "monthly"
                                            ? "bg-pink-500 text-white"
                                            : `${theme === "dark" ? "text-gray-300" : "text-gray-700"}`
                                        }`}
                                    onClick={() => setActiveTab("monthly")}
                                >
                                    Monthly
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "yearly"
                                            ? "bg-pink-500 text-white"
                                            : `${theme === "dark" ? "text-gray-300" : "text-gray-700"}`
                                        }`}
                                    onClick={() => setActiveTab("yearly")}
                                >
                                    Yearly <span className="text-xs font-normal">Save 15%</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`
                  relative rounded-lg overflow-hidden shadow-lg
                  ${theme === "dark" ? "bg-gray-800" : "bg-white"}
                  ${plan.popular ? "border-2 border-pink-500" : ""}
                `}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                        Most Popular
                                    </div>
                                )}

                                <div className="p-6">
                                    <h3 className="text-center text-2xl font-bold mb-4">{plan.name}</h3>

                                    <div className="text-center mb-6">
                                        <div className="flex items-center justify-center">
                                            <span className="text-4xl font-bold">
                                                ${activeTab === "monthly" ? plan.price.monthly : plan.price.yearly}
                                            </span>
                                            {plan.originalPrice && (
                                                <span
                                                    className={`ml-2 line-through text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                                                >
                                                    ${activeTab === "monthly" ? plan.originalPrice.monthly : plan.originalPrice.yearly}
                                                </span>
                                            )}
                                        </div>
                                        <p className={`mt-1 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                                            {plan.price.monthly === 0
                                                ? "Free"
                                                : `$${activeTab === "monthly" ? plan.price.monthly : plan.price.yearly}/${activeTab === "monthly" ? "month" : "month"}`}
                                        </p>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                {feature.included !== undefined ? (
                                                    feature.included ? (
                                                        <svg
                                                            className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            className="w-5 h-5 text-gray-400 mr-2 mt-0.5"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M6 18L18 6M6 6l12 12"
                                                            />
                                                        </svg>
                                                    )
                                                ) : (
                                                    <span className="font-medium mr-2">{feature.value}</span>
                                                )}
                                                <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to="/register"
                                        className={`
                      block w-full py-3 text-center rounded-lg font-medium transition-colors
                      ${plan.popular
                                                ? "bg-pink-500 text-white hover:bg-pink-600"
                                                : theme === "dark"
                                                    ? "bg-gray-700 text-white hover:bg-gray-600"
                                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                            }
                    `}
                                    >
                                        {plan.cta}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className={`mt-12 p-6 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="mb-4 md:mb-0 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start mb-2">
                                    <svg
                                        className="w-5 h-5 text-gray-500 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        />
                                    </svg>
                                    <span className="text-sm text-gray-500">
                                        We use Stripe to process purchases and do not know your card details.
                                    </span>
                                </div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <span className="text-sm font-bold mr-2">Secure Payments</span>
                                    <span className="text-sm font-bold mx-2">•</span>
                                    <span className="text-sm font-bold">Safe and Secure SSL Encrypted</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/stripe-logo-FIJdDOJkf8WwtAnmMKurWnBF2FV0UR.png"
                                    alt="Stripe"
                                    className="h-8"
                                />
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/mastercard-logo-FIJdDOJkf8WwtAnmMKurWnBF2FV0UR.png"
                                    alt="Mastercard"
                                    className="h-8"
                                />
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/visa-logo-FIJdDOJkf8WwtAnmMKurWnBF2FV0UR.png"
                                    alt="Visa"
                                    className="h-8"
                                />
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/discover-logo-FIJdDOJkf8WwtAnmMKurWnBF2FV0UR.png"
                                    alt="Discover"
                                    className="h-8"
                                />
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/amex-logo-FIJdDOJkf8WwtAnmMKurWnBF2FV0UR.png"
                                    alt="American Express"
                                    className="h-8"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`py-16 px-6 md:px-12 lg:px-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to extract business data from Google Maps?</h2>
                    <p className={`text-lg md:text-xl mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                        Join thousands of businesses that use G Maps Extractor to find leads, analyze competitors, and grow their
                        business.
                    </p>
                    <Link
                        to="/register"
                        className="inline-block px-8 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors text-lg font-medium"
                    >
                        Get Started for Free
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className={`py-12 px-6 md:px-12 lg:px-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="text-pink-500 mr-2">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold">G Maps Extractor</span>
                            </div>
                            <p className={`mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                The most powerful tool to extract business information from Google Maps.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Product</h3>
                            <ul className={`space-y-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                <li>
                                    <a href="#" className="hover:text-pink-500 transition-colors">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-500 transition-colors">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-500 transition-colors">
                                        API
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-500 transition-colors">
                                        Integrations
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-500 transition-colors">
                                        Documentation
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Company</h3>
                            <ul className={`space-y-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                <li>
                                    <a href="#" className="hover:text-pink-500 transition-colors">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-500 transition-colors">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-500 transition-colors">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-500 transition-colors">
                                        Press
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-500 transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Legal</h3>
                            <ul className={`space-y-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                <li>
                                    <a href="#" className="hover:text-pink-500 transition-colors">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-500 transition-colors">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-500 transition-colors">
                                        Cookie Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-500 transition-colors">
                                        GDPR
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className={`mt-12 pt-8 border-t ${theme === "dark" ? "border-gray-800 text-gray-400" : "border-gray-200 text-gray-600"}`}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p>&copy; {new Date().getFullYear()} G Maps Extractor. All rights reserved.</p>
                            <p className="mt-4 md:mt-0">v2.2.13</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage
