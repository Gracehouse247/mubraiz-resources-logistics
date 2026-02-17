"use client";

import React, { useEffect } from 'react';

/**
 * Mubraiz Error Intelligence Node
 * A premium client-side monitoring sink that captures mission-critical
 * exceptions and transmits them to the administrative grid.
 */
export default function ErrorIntelligence() {
    useEffect(() => {
        const handleGlobalErrors = (event: ErrorEvent) => {
            const errorIntel = {
                message: event.message,
                source: event.filename,
                line: event.lineno,
                col: event.colno,
                stack: event.error?.stack,
                timestamp: new Date().toISOString(),
                node: window.location.href,
                userAgent: navigator.userAgent
            };

            console.warn("🚨 GRID EXCEPTION CAPTURED:", errorIntel);

            // In production, this would be transmitted to Sentry or a custom logging endpoint
            if (process.env.NODE_ENV === 'production') {
                fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/logs`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        type: 'CLIENT_ERROR',
                        intel: errorIntel
                    })
                }).catch(err => console.error("Critical: Error Intelligence Sync Failed", err));
            }
        };

        window.addEventListener('error', handleGlobalErrors);
        return () => window.removeEventListener('error', handleGlobalErrors);
    }, []);

    return null; // Silent monitoring node
}
