import React, { useState, useEffect } from "react";
import axios from "axios";

function TicketWidget(props) {
    const [ticketType, setTicketType] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const apiBaseUrl = "http://localhost:5059/api";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            await axios.post(`${apiBaseUrl}/ticket`, {
                apiKey: props.apiKey,
                subject: ticketType,
                message: message
                // userId: email
            });

            setSuccess(true);
            setTicketType("");
            setMessage("");
            setEmail("");
        } catch (err) {
            setError("Failed to submit the ticket. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="p-4 border rounded shadow border-black-300 ticket-widget">
                <h2 className="text-lg font-semibold">Submit a Ticket</h2>
                {error && <p className="text-red-500">{error}</p>}
                {success && (
                    <p className="text-green-500">
                        Ticket submitted successfully!
                    </p>
                )}
                {!success && (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 mt-1 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Ticket Type
                            </label>
                            <select
                                value={ticketType}
                                onChange={(e) => setTicketType(e.target.value)}
                                className="w-full p-2 mt-1 border rounded"
                                required>
                                <option value="">Select a type</option>
                                <option value="product">Product</option>
                                <option value="refund">Refund</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full p-2 mt-1 border rounded"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700">
                            {loading ? "Submitting..." : "Submit Ticket"}
                        </button>
                    </form>
                )}
            </div>
        </>
    );
}

export default TicketWidget;
