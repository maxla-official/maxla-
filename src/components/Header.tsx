import React from "react";
import {
  Layers,
  Cpu,
  Download,
  PlusCircle,
  FolderOpen,
  ShieldCheck,
  ChevronDown,
  Activity,
  ShieldAlert,
  FileCheck,
} from "lucide-react";
import { CaseStudy, ProblemDomain } from "../types";
import { CASE_STUDIES } from "../data/caseStudies";

interface HeaderProps {
  currentTitle: string;
  currentDomain: ProblemDomain;
  isCustom: boolean;
  onOpenNewModal: () => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onOpenExportModal: () => void;
  isAiGenerating: boolean;
  hasApiKey: boolean;
  isAlertModeActive?: boolean;
  pendingAuthorityAlertsCount?: number;
  onOpenAuthorityCenter?: () => void;
  onOpenApprovalLog?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTitle,
  currentDomain,
  isCustom,
  onOpenNewModal,
  onSelectCaseStudy,
  onOpenExportModal,
  isAiGenerating,
  hasApiKey,
  isAlertModeActive = true,
  pendingAuthorityAlertsCount = 0,
  onOpenAuthorityCenter,
  onOpenApprovalLog,
}) => {
  const [caseMenuOpen, setCaseMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Identity */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-slate-900 border border-indigo-400/30 shadow-lg shadow-indigo-950/50">
              <span className="font-mono font-black text-lg sm:text-xl text-white tracking-tighter">
                M
              </span>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-slate-950 animate-pulse" />
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white font-mono">
                  MAXLA
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-900 text-slate-300 border border-slate-700">
                  CONTINUITY PROTOCOL | TIER-1 RISK MAP
                </span>
              </div>
              <p className="hidden sm:block text-xs text-slate-400 font-medium">
                SEMICON India Supply Chain & Executive Decision Intelligence
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Case Studies Selector */}
            <div className="relative">
              <button
                id="benchmark-cases-dropdown"
                onClick={() => setCaseMenuOpen(!caseMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-xs sm:text-sm font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-colors"
              >
                <FolderOpen className="w-4 h-4 text-slate-300" />
                <span className="hidden md:inline">Benchmark Cases</span>
                <span className="md:hidden">Cases</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {caseMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setCaseMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl z-50 p-2 space-y-1">
                    <div className="px-3 py-2 border-b border-slate-800">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Pre-Engineered World-Class Benchmarks
                      </p>
                    </div>
                    {CASE_STUDIES.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          onSelectCaseStudy(c);
                          setCaseMenuOpen(false);
                        }}
                        className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-800/90 transition-colors group flex flex-col space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-300 group-hover:text-white">
                            {c.domain}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {c.scope}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-200 line-clamp-1 group-hover:text-white">
                          {c.title}
                        </p>
                        <p className="text-[11px] text-slate-400 line-clamp-1">
                          {c.tagline}
                        </p>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Decision Center Button */}
            {onOpenAuthorityCenter && (
              <button
                id="header-authority-center-button"
                onClick={onOpenAuthorityCenter}
                className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-2 text-xs font-bold rounded-lg border transition-all ${
                  isAlertModeActive
                    ? "bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-100 shadow-sm"
                    : "bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-300"
                }`}
                title="Open Decision Center"
              >
                <ShieldAlert className={`w-4 h-4 ${isAlertModeActive ? "text-[#EF4444]" : "text-slate-400"}`} />
                <span className="hidden sm:inline">
                  {isAlertModeActive ? "Executive Review Required" : "Decision Center"}
                </span>
                {pendingAuthorityAlertsCount > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-[#EF4444] text-white font-mono">
                    {pendingAuthorityAlertsCount}
                  </span>
                )}
              </button>
            )}

            {/* Approval Log Button */}
            {onOpenApprovalLog && (
              <button
                id="header-approval-log-button"
                onClick={onOpenApprovalLog}
                className="hidden md:flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-colors"
                title="View Cryptographic Decision Approval Log"
              >
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span className="hidden xl:inline">Approval Log</span>
              </button>
            )}

            {/* New Challenge Button */}
            <button
              id="new-challenge-button"
              onClick={onOpenNewModal}
              disabled={isAiGenerating}
              className="flex items-center space-x-1.5 sm:space-x-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-900/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Solve New Masla</span>
            </button>

            {/* Export Brief Button */}
            <button
              id="export-brief-button"
              onClick={onOpenExportModal}
              className="p-2 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-colors flex items-center space-x-1.5"
              title="Export Executive Memorandum"
            >
              <Download className="w-4 h-4 text-slate-300" />
              <span className="hidden lg:inline">Executive Brief</span>
            </button>
          </div>
        </div>

        {/* Challenge Subheader / Breadcrumb bar */}
        <div className="py-2.5 border-t border-slate-900 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-2 overflow-hidden">
            <span className="font-mono text-slate-500 uppercase tracking-wider text-[11px]">
              Active Challenge:
            </span>
            <span className="font-medium text-slate-200 truncate max-w-xs sm:max-w-md md:max-w-xl">
              {currentTitle}
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
              {currentDomain}
            </span>
            {isCustom && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                Custom Synthesized
              </span>
            )}
          </div>

          <div className="flex items-center space-x-3 text-slate-400 text-[11px]">
            <div className="flex items-center space-x-1.5">
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              <span>MAXLA Intelligence Engine</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">MECE Verified</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
