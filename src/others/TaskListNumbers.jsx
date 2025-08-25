import React from 'react'

const TaskListNumbers = ({data}) => {
  const cards = [
    {
      title: 'New Tasks',
      value: data?.task_count?.new_task || 0,
      subtitle: 'Ready to start',
      icon: '📝',
      gradient: 'from-emerald-400 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-700',
      iconBg: 'bg-emerald-100'
    },
    {
      title: 'In Progress',
      value: data?.task_count?.active || 0,
      subtitle: 'Currently working',
      icon: '🚀',
      gradient: 'from-blue-400 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      iconBg: 'bg-blue-100'
    },
    {
      title: 'Completed',
      value: data?.task_count?.completed_task || 0,
      subtitle: 'Successfully done',
      icon: '✅',
      gradient: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      iconBg: 'bg-green-100'
    },
    {
      title: 'Needs Review',
      value: data?.task_count?.failed_task || 0,
      subtitle: 'Requires attention',
      icon: '⚠️',
      gradient: 'from-orange-400 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-700',
      iconBg: 'bg-orange-100'
    }
  ]

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {cards.map((card, index) => (
        <div 
          key={index}
          className={`relative bg-gradient-to-br ${card.bgGradient} border ${card.borderColor} rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className='absolute inset-0 opacity-5'>
            <div className='absolute inset-0 bg-gradient-to-br from-white to-transparent'></div>
          </div>
          
          {/* Floating Elements */}
          <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${card.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
          <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr ${card.gradient} rounded-full opacity-5 group-hover:opacity-15 transition-opacity duration-300`}></div>
          
          {/* Content */}
          <div className='relative z-10'>
            {/* Header */}
            <div className='flex items-center justify-between mb-6'>
              <div className={`w-14 h-14 ${card.iconBg} rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                <span className='text-2xl'>{card.icon}</span>
              </div>
              <div className='text-right'>
                <div className={`text-4xl font-bold ${card.textColor} group-hover:scale-110 transition-transform duration-300`}>
                  {card.value}
                </div>
                <div className={`text-xs font-medium ${card.textColor} opacity-70 mt-1`}>
                  {card.value === 1 ? card.title.slice(0, -1) : card.title}
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className='space-y-2'>
              <h3 className={`text-lg font-bold ${card.textColor}`}>
                {card.title}
              </h3>
              <p className={`text-sm ${card.textColor} opacity-70`}>
                {card.subtitle}
              </p>
              
              {/* Progress Indicator */}
              <div className='flex items-center space-x-2 mt-4'>
                <div className={`flex-1 h-2 bg-white/40 rounded-full overflow-hidden`}>
                  <div 
                    className={`h-full bg-gradient-to-r ${card.gradient} rounded-full transition-all duration-500 group-hover:animate-pulse`}
                    style={{ 
                      width: `${Math.min((card.value / Math.max((data?.task?.length || 1), 1)) * 100, 100)}%` 
                    }}
                  ></div>
                </div>
                <span className={`text-xs font-medium ${card.textColor} opacity-70`}>
                  {card.value > 0 ? Math.round((card.value / Math.max((data?.task?.length || 1), 1)) * 100) : 0}%
                </span>
              </div>
            </div>
          </div>
          
          {/* Hover Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumbers