'use client';

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FaqAccordion() {
    const mfaqs = [
        {
            questions: "Why do I need a private limited company?",
            answer: "A Private Limited Company provides limited liability, legal protection, and greater credibility."
        },
        {
            questions: "What documents do I need to register a Private Limited Company?",
            answer: (
                <ul className="list-disc pl-5 space-y-1">
                    <li>National ID</li>
                    <li>Registered Address</li>
                </ul>
            )
        },
        {
            questions: "What do I have to do to register a Private Limited Company?",
            answer: (
                <ul className="list-disc pl-5 space-y-1">
                    <li>Reserve the company name with the Registrar of Companies (ROC).</li>
                    <li>Prepare incorporation documents (Articles of Association, Form 1, Form 18, Form 19).</li>
                    <li>Sign prepared document.</li>
                    <li>Submit documents to the ROC and pay the registration fees.</li>
                    <li>Receive the Certificate of Incorporation from the ROC.</li>
                    <li>Open a corporate bank account and complete initial statutory registrations (TIN)</li>
                </ul>
            )
        },
        {
            questions: "Can anyone else use my Company Name?",
            answer: "No, once your company name is approved and registered with the ROC, no one else can legally use the same name."
        },
        {
            questions: "What is the minimum capital required?",
            answer: "No minimum capital requirement, except for special industries."
        },
        {
            questions: "How many directors are required to register a Private Limited Company?",
            answer: "A Private Limited Company requires a minimum of one director."
        },
        {
            questions: "Can a foreigner own a Private Limited Company in Sri Lanka?",
            answer: "Yes, but specific restrictions may apply depending on the company type and industry."
        },
        {
            questions: "Can the directors and shareholders be changed after registration?",
            answer: "Yes. Changes must be updated with the Registrar of Companies using the appropriate forms."
        },
        {
            questions: "How long will it take to register a Private Limited Company?",
            answer: "Registration takes approximately five working days after signing of documents."
        },
        {
            questions: "What do I have to do after registering a Private Limited Company?",
            answer: (
                <ul className="list-disc pl-5 space-y-1">
                    <li>Opening a bank account</li>
                    <li>Tax registration (TIN, VAT, Income Tax, PAYE, etc.)</li>
                    <li>Maintaining statutory records</li>
                    <li>Annual returns filing</li>
                    <li>Audited financial statements (if required)</li>
                </ul>
            )
        }
    ];

    return (
        <Accordion type="single" collapsible className="w-full space-y-4">
            {mfaqs.map((faq, index) => (
                <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border border-neutral-200 rounded-lg px-6 data-[state=open]:bg-neutral-50 data-[state=open]:border-[#0B1B32]/20 transition-colors"
                >
                    <AccordionTrigger className="text-left text-lg font-medium text-[#0B1B32] py-6 hover:no-underline">
                        {faq.questions}
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-600 text-base pb-6 leading-relaxed">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
