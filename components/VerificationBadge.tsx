import { VerificationStatus, ConfidenceLevel } from '@/data/factChecks';

interface VerificationBadgeProps {
  status: VerificationStatus;
  confidence?: ConfidenceLevel;
  showConfidence?: boolean;
}

export default function VerificationBadge({ 
  status, 
  confidence, 
  showConfidence = false 
}: VerificationBadgeProps) {
  const getStatusColor = (status: VerificationStatus) => {
    switch (status) {
      case 'Verified':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Partially Verified':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Not Verified':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getConfidenceColor = (confidence: ConfidenceLevel) => {
    switch (confidence) {
      case 'High':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Medium':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Low':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="flex gap-2 flex-wrap">
      <span 
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(status)}`}
      >
        {status}
      </span>
      {showConfidence && confidence && (
        <span 
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getConfidenceColor(confidence)}`}
        >
          {confidence} Confidence
        </span>
      )}
    </div>
  );
}
