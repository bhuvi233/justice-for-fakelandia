import React, { FormEvent, useContext, useState } from "react";
import { Misdemeanour, rand } from "../../docs/generate_misdemeanours";
import { ConfessionFormReasonInput } from "./confessionFormReasonInput";
import { ConfessionFormSubjectInput } from "./confessionFormSubjectInput";
import { ConfessionFormTextareaInput } from "./confessionFormTextareaInput";
import {
    IMisdemeanour,
    MisdemeanourContext,
} from "../misdemeanour/misdemeanourContext";

export const Confession: React.FC = () => {
    const [subject, setSubject] = useState("");
    const [reason, setReason] = useState("");
    const [confession, setConfession] = useState("");

    const misdemeanours: IMisdemeanour[] = useContext(MisdemeanourContext);

    const handleConfessionFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (reason === "talk")
            console.log(`Subject: ${subject} Confession: ${confession}`);
        else {
            misdemeanours.push({
                citizenId: Math.floor(
                    misdemeanours.length + 1 + rand(37) * rand(967)
                ),
                misdemeanour: reason as Misdemeanour,
                date: new Date().toLocaleDateString(),
            });
        }
        setSubject("");
        setReason("");
        setConfession("");
    };

    return (
        <div>
            <p>
                It's very difficult to catch people committing misdemeanours so
                we appreciate it when citizens confess to s directly.
            </p>
            <p>
                However, if you're just having a hard day and need to vent then
                you're welcome to contact us here too. Up to you!
            </p>
            <form
                className="confessionform__container"
                onSubmit={handleConfessionFormSubmit}
            >
                <p>
                    <ConfessionFormSubjectInput
                        subject={subject}
                        onChangeSubjectInput={(e) => setSubject(e.target.value)}
                    />
                </p>
                <p>
                    <ConfessionFormReasonInput
                        reason={reason}
                        onChangeReason={(e) => setReason(e.target.value)}
                    />
                </p>
                <p>
                    <ConfessionFormTextareaInput
                        confession={confession}
                        onChangeConfession={(e) =>
                            setConfession(e.target.value)
                        }
                    />
                </p>
                <button
                    disabled={
                        !(
                            subject &&
                            reason &&
                            confession &&
                            confession.length > 100
                        )
                    }
                    className="confessionform__button"
                    type="submit"
                    value="submit"
                >
                    Confess
                </button>
            </form>
        </div>
    );
};
