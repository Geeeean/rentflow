/**
 * Bump this whenever the substance of the privacy notice changes. It is stored alongside
 * every lead so you can later prove *which* text a person agreed to — GDPR Art. 7(1)
 * requires being able to demonstrate consent, and "they ticked a box" is not enough on
 * its own if the wording has since changed.
 */
const PRIVACY_POLICY_VERSION = "2026-08-05";

/** Data kept for 24 months from collection, then deleted. Mirrored in the privacy notice. */
const RETENTION_MONTHS = 24;

export { PRIVACY_POLICY_VERSION, RETENTION_MONTHS }
