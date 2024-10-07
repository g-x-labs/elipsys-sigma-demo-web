import Modal from "@/components/ui/Modal";

export default function TokenNetworkModal() {
  return (
    <Modal modalId="tokenNetworkModal" title="Select">
      {/* Search bar */}
      <div className="flex h-96 flex-wrap gap-3 border-t border-gray-800 py-4">
        {/* Networks Column */}
        <div className="flex max-w-[172px] flex-1 flex-col gap-y-3 overflow-y-auto border-r border-gray-800">
          <h3 className="text-gray-400 text-sb3">Networks</h3>
          <div className="space-y-2">
            <div className="flex w-[160px] flex-row items-center justify-start gap-x-2 px-3 py-2">
              <div className="h-8 w-8 rounded-lg bg-red"></div>
              <span className="text-b3">Chain name</span>
            </div>
          </div>
        </div>

        {/* Tokens Column */}
        <div className="flex max-w-[252px] flex-1 flex-col gap-y-3 overflow-y-auto">
          <h3 className="text-gray-400 text-sb3">Tokens</h3>
          <div className="space-y-2">
            <div className="flex w-[240px] flex-row items-center justify-start gap-x-2 px-3 py-2">
              <div className="h-8 w-8 rounded-lg bg-red"></div>
              <span className="text-b3">Token name</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
