
import PropTypes from 'prop-types';

export function ImpactCard({ icon: Icon, value, label }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center">
        <div className="mb-2">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div className="text-3xl font-bold mb-1">{value}</div>
        <div className="text-gray-600 text-sm">{label}</div>
      </div>
    </div>
  );
}

ImpactCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
};

