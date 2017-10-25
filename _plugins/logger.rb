module Jekyll
  module LoggerFilter
    def warn(input)
      abort "[WARN]: #{input}"
      nil
    end
  end
end

Liquid::Template.register_filter(Jekyll::LoggerFilter)
