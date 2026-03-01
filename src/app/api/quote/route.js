import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { name, phone, email, projectType, description } = await request.json();

        // Validate required fields
        if (!name || !phone) {
            return NextResponse.json(
                { error: 'Name and phone are required' },
                { status: 400 }
            );
        }

        const notificationEmail = process.env.NOTIFICATION_EMAIL;

        if (!notificationEmail) {
            console.error('NOTIFICATION_EMAIL not configured');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Send email notification
        await resend.emails.send({
            from: 'TradeLayer Website <onboarding@resend.dev>',
            to: notificationEmail,
            subject: `🔔 New Quote Request from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: #1A8B7F; padding: 24px; border-radius: 12px 12px 0 0;">
                        <h1 style="color: white; margin: 0; font-size: 22px;">New Quote Request!</h1>
                        <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Someone wants a fence — follow up ASAP</p>
                    </div>
                    <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 140px;">Name</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Phone</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                                    <a href="tel:${phone}" style="color: #1A8B7F; text-decoration: none;">${phone}</a>
                                </td>
                            </tr>
                            ${email ? `
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                                    <a href="mailto:${email}" style="color: #1A8B7F; text-decoration: none;">${email}</a>
                                </td>
                            </tr>` : ''}
                            ${projectType ? `
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Project Type</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${projectType}</td>
                            </tr>` : ''}
                            ${description ? `
                            <tr>
                                <td style="padding: 12px 0; font-weight: bold; color: #374151; vertical-align: top;">Details</td>
                                <td style="padding: 12px 0; color: #111827;">${description}</td>
                            </tr>` : ''}
                        </table>
                        <div style="margin-top: 24px; padding: 16px; background: #FEF3C7; border-radius: 8px; border: 1px solid #F59E0B;">
                            <p style="margin: 0; color: #92400E; font-size: 14px;">
                                ⚡ <strong>Tip:</strong> Responding within 5 minutes increases your close rate by 10x!
                            </p>
                        </div>
                    </div>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Quote submission error:', error);
        return NextResponse.json(
            { error: 'Failed to send quote request' },
            { status: 500 }
        );
    }
}
