export const MiniCard = () => {
  const achievements = [
    {
      number: '3+',
      label: 'Years Experience',
      icon: '🚀'
    },
    {
      number: '15+',
      label: 'Projects Completed',
      icon: '💼'
    },
    {
      number: '8+',
      label: 'Technologies Mastered',
      icon: '⚡'
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      icon: '⭐'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Numbers That Matter</h3>
          <p className="text-gray-600">성과로 말하는 개발자</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};