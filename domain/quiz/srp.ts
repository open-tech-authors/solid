export const quiz1 = {
  question: 'В чём главная причина того, что выбор формата данных вынесен в отдельный класс?',
  variants: [
    {
      id: 'srp1',
      main:
        'Он не относится ни к форматированию данных, ни к подготовке их к экспорту. По принципу единой ответственности его следует держать отдельно от других сущностей'
    },
    {
      id: 'srp2',
      main:
        'Потому что иначе код других классов сильно разрастается. Так без этого чтение и понимание становятся гораздо труднее',
      description:
        'Да, но это лишь следствие основной причины — что выбор формата не относится ни к форматированию данных, ни к подготовке их к экспорту'
    },
    {
      id: 'srp3',
      main:
        'Это удобнее с точки зрения управления зависимостями. В этом случае подключение функциональности выбора формата производится в одном месте',
      description:
        'Да, но это следствие основной причины — выбор формата не относится ни к форматированию данных, ни к подготовке их к экспорту, поэтому правильно его вынести в отдельный модуль'
    }
  ]
}