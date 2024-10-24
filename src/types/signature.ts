export type PublicKeyPackage = {
  verifying_shares: Record<string, string>;
  verifying_key: string;
};

export type StartRoundPayload = {
  msg: string;
  public_key_set: string;
  commitments: Array<[string, Commitments]>;
};

export type Commitments = {
  hiding: string;
  binding: string;
};

export type AddSignatureSharePayload = {
  round_id: string;
  signer_id: string;
  signature_share: string;
};
